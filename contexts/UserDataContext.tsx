import { ID, Permission, Role, Query } from "react-native-appwrite";
import { createContext, useContext, useEffect, useState } from "react";
import { databases } from "@/lib/appwrite";

export const USER_DATABASE_ID = "67d918b30004eb94cca3"; // Replace with your database ID
export const USER_COLLECTION_ID = "67d91ced00174ab77bde"; // Replace with your collection ID

const DataContext = createContext<any>(null);

export function useData() {
  return useContext(DataContext);
}

export function DataProvider(props: any) {
  const [ideas, setIdeas] = useState<any>([]);

  async function add(idea: any) {
    const response = await databases.createDocument(
      USER_DATABASE_ID,
      USER_COLLECTION_ID,
      ID.unique(),
      idea,
      [Permission.write(Role.user(idea.userId))]
    );
    setIdeas((ideas: any) => [response, ...ideas].slice(0, 10));
  }

  async function remove(id: string) {
    await databases.deleteDocument(USER_DATABASE_ID, USER_COLLECTION_ID, id);
    setIdeas((ideas: any) => ideas.filter((idea: any) => idea.$id !== id));
    await init(); // Refetch ideas to ensure we have 10 items
  }

  async function init() {
    const response = await databases.listDocuments(
      USER_DATABASE_ID,
      USER_COLLECTION_ID,
      [Query.orderDesc("$createdAt"), Query.limit(10)]
    );
    setIdeas(response.documents);
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <DataContext.Provider value={{ current: ideas, add, remove }}>
      {props.children}
    </DataContext.Provider>
  );
}
