import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";

// create the client with your clientId, or secretKey if in a server environment
export const client = createThirdwebClient({
  clientId: "YOUR_CLIENT_ID",
});

// connect to your contract
export const contract = getContract({
  client,
  chain: defineChain(84532),
  address: "0x142A6Dbe60024dBdcE5455aa63589Fd7E85E4Cf5",
});
