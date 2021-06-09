import { Signer } from "@waves/signer";
import { ProviderWeb } from "@waves.exchange/provider-web";

async function authFunc() {
  const signer = new Signer({
    // Specify URL of the node on Testnet
    NODE_URL: "https://nodes-testnet.wavesnodes.com",
  });
  signer.setProvider(new ProviderWeb("https://testnet.waves.exchange/signer/"));

  const user = await signer.login();
  const balances = await signer.getBalance();
  console.log(balances);
  alert("My balance is " + balances[0].amount)
}

export default authFunc;
