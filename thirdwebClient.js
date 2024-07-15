import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";
import dotenv from "dotenv";
dotenv.config();

// create the client with your clientId, or secretKey if in a server environment
export const thirdWebClient = createThirdwebClient({
  secretKey: process.env.THIRDWEB_SECRET_KEY,
});

// connect to your contract
export const contract = getContract({
  thirdWebClient,
  chain: defineChain(84532),
  address: process.env.CONTRACT_ADDRESS,
});
