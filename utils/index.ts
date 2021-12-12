// Import any additional classes and/or functions needed from Solana's web3.js library as you go along:
import { Cluster, Keypair } from "@solana/web3.js";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import { message } from "antd";

// *Step 3*: implement a function that gets an account's balance
const refreshBalance = async (network: Cluster | undefined, account: Keypair | null) => {
  // This line ensures the function returns before running if no account has been set
  if (!account) return 0;

  try {
    // (a) review the import guidance on line 1
    // (b) instantiate a connection using clusterApiUrl with the active network passed in as an argument
    // Documentation References:
    //   https://solana-labs.github.io/solana-web3.js/classes/Connection.html
    //   https://solana-labs.github.io/solana-web3.js/modules.html#clusterApiUrl
    console.log("Balance functionality not implemented yet!");
    const connection = new Connection(clusterApiUrl(network), "confirmed");

    // (c) get the key using one of the accessors on the account passed in as an argument
    // Documentation Reference: https://solana-labs.github.io/solana-web3.js/classes/Keypair.html
    const publicKey = account.publicKey;

    // (d) get the account's balance using the connection instance
    // Documentation Reference: https://solana-labs.github.io/solana-web3.js/classes/Connection.html
    const balance = await connection.getBalance(publicKey);

    return balance;
    // (e) You can now delete the console.log statement since the function is implemented!
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown Error";
    message.error(`Balance refresh failed: ${errorMessage}`);
    return 0;
  }
};

// *Step 4*: implement a function that airdrops SOL into devnet account
const handleAirdrop = async (network: Cluster, account: Keypair | null) => {
  // This line ensures the function returns before running if no account has been set
  if (!account) return;

  try {
    // (a) review the import guidance on line 1
    // (b) instantiate a connection using clusterApiUrl with the active network passed in as an argument
    // Documentation References:
    //   https://solana-labs.github.io/solana-web3.js/classes/Connection.html
    //   https://solana-labs.github.io/solana-web3.js/modules.html#clusterApiUrl
    console.log("Airdrop functionality not implemented yet!");
    const connection = "";

    // (c) get the key using one of the accessors on the account passed in as an argument
    // Documentation Reference: https://solana-labs.github.io/solana-web3.js/classes/Keypair.html
    const publicKey = "";

    // (d) request the airdrop using the connection instance
    // Note that you should include the amount to airdrop (consider using the LAMPORTS_PER_SOL constant from the web3.js library)
    // Documentation Reference: https://solana-labs.github.io/solana-web3.js/classes/Connection.html
    const confirmation = "";

    // (d) confirm the transaction using the connection instance and the confirmation string returned from the airdrop
    // Documentation Reference: https://solana-labs.github.io/solana-web3.js/classes/Connection.html
    const result = "";

    // (e) Refactor the refreshBalance function to return balances in SOL instead of Lamports (Hint: LAMPORTS_PER_SOL)

    // This line returns the balance after the airdrop so the UI can be refreshed
    return await refreshBalance(network, account);
    // (f) You can now delete the console.log statement since the function is implemented!
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown Error";
    message.error(`Airdrop failed: ${errorMessage}`);
  }
};

export { refreshBalance, handleAirdrop };
