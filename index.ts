import { getKernelClient } from './utils'
import  axios from 'axios';

const main = async () => {
  const infuraUrl = `https://linea-mainnet.infura.io/v3/${process.env.INFURA_ID}`;
  try {
  const response = await axios.post(infuraUrl, {
            jsonrpc: '2.0',
            id: 1,
            method: 'eth_blockNumber',
            params: []
        });

  const latestBlock = response.data.result;
  console.log(`linea-mainnet block hight: ${latestBlock}`);
  } catch (error) {
        console.error('Error fetching latest block:', error);
    }
}

main()
