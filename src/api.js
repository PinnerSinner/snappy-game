import PocketBase from 'pocketbase';

// Connect to your PocketBase instance
const pb = new PocketBase('https://snappy.pockethost.io/');

// Export the PocketBase client for reuse in your app
export default pb;
