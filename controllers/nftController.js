import Fraction from "../models/Fraction.js";
import { prepareContractCall, sendTransaction } from "thirdweb";
import { contract, client } from "../thridwebClient.js";
import dotenv from "dotenv";

const sdk = ThirdwebSDK.fromPrivateKey(
  process.env.WALLET_PRIVATE_KEY,
  Number(process.env.CHAIN_ID),
  {
    secretKey: process.env.THIRDWEB_SECRET_KEY,
  }
);

const thirdWebClient = createThirdwebClient({
  secretKey: process.env.THIRDWEB_SECRET_KEY,
});

export const mintFractionalNFT = async (req, res) => {
  const { fractionTokenId } = req.body;
  const owner = req.user._id;

  try {
    const fraction = await Fraction.findOne({ _id: fractionTokenId, owner });
    if (!fraction) {
      return res.status(400).send("Fraction not found or not owned by user");
    }

    const transaction = await prepareContractCall({
      contract,
      method: "function mintFractionalNFT(uint256 fractionTokenId) payable",
      params: [fractionTokenId],
    });
    const { transactionHash } = await sendTransaction({
      transaction,
      account,
    });
    console.log("Fractional NFT minted successfully", {
      transactionHash,
    });
    res.status(200).send("Fractional NFT minted successfully", {
      transactionHash,
    });
  } catch (err) {
    res.status(500).send("Server Error");
  }
};
