import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

async function main() {
  const client = createPublicClient({
    chain: mainnet,
    transport: http(),
  })

  // getBlockNumber is async, so await it
  const blockNumber = await client.getBlockNumber()
  console.log("The block number is", blockNumber.toString())
}


main().catch((err) => {
  console.error("Error:", err)
})
