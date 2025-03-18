import { Platform } from 'react-native';
import { Client, Databases } from 'react-native-appwrite';

const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  project: '67d91877002aab714ffe',
  db: 'paper',

  // Collections for requests data
  col: {
    users: 'users',
    tasks: 'todos',
  },
};

// Create the client instance
const client = new Client()
  // .setProject("67d91877002aab714ffe")
  // .setPlatform("ait.edu.todocheck");
  .setEndpoint(config.endpoint)
  .setProject(config.project);

// Setting values for the client based on the platform
switch (Platform.OS) {
  case 'ios':
    client.setPlatform('ait.edu.todocheck');
    break;
  // case "android":
  //   client.setPlatform("ait.edu.todocheck");
  //   break;
  // default:
  //   client.setPlatform("web");
}

const database = new Databases(client);
export { client, config, database };
