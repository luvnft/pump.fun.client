import {Box, Text} from "grommet";

export const RulesPage = () => {
  return <Box width={'800px'} gap={'48px'} margin={{ top: '32px', bottom: '32px' }}>
    <Box align={'center'}>
      <Text size={'22px'} color={'accentWhite'} weight={500}>MEMECO. Rules</Text>
    </Box>
    <Box gap={'24px'}>
      <Box align={'center'}>
        <Text color={'accentWhite'} size={'20px'}>Launching tokens, minting, burning</Text>
      </Box>
      <Box gap={'8px'}>
        <Text color={'accentWhite'}>1. Anyone can launch a token on MEMECO. The token will automatically join the current competition round.</Text>
        <Text color={'accentWhite'}>2. After a token is launched, anyone can pay and mint more of the tokens</Text>
        <Text color={'accentWhite'}>3. Token price grows exponentially to the token's supply. The more tokens minted, the more it costs to mint the same amount of token.</Text>
        <Text color={'accentWhite'}>4. Anyone can burn their token at any time, in exchange for ONE. Like in minting, tokens can be sold for more ONE when token supply is high.</Text>
        <Text color={'accentWhite'}>5. Tokens can no longer burned or minted on this platform when the current competition round ends, but it may be eligible to be traded on swap.country, or be exchanged into another tradable token. See below for details.</Text>
      </Box>
    </Box>
    <Box gap={'16px'}>
      <Box align={'center'}>
        <Text color={'accentWhite'} size={'20px'}>Competition rounds, winner selection, publish to swap.country, exchange tokens</Text>
      </Box>
      <Box gap={'8px'}>
        <Text color={'accentWhite'}>1. Tokens launched in the same round competes to be the one with highest net liquidity - that is, the one that has received the highest amount of payment in ONE to mint the token, minus the amount of ONE paid out due to burning the token</Text>
        <Text color={'accentWhite'}>2. A round of competition ends every 7 days at a random time within one hour around midnight, US Pacific Time, if at least one token received 420,000 amount of ONE in net liquidity. If there is no such token, the competition round is automatically extended for 7 days.</Text>
        <Text color={'accentWhite'}>3. When a round of competition ends, the winner is determined as the one with the highest net liquidity. The winner will be automatically announced on Pump One and its social platforms. Tokens in the same competition round, including the winner, can no longer be minted or burned on Pump One.</Text>
        <Text color={'accentWhite'}>4. A liquidity pool will be automatically created on swap.country so the winner token can be traded outside the platform. The price of the liquidity pool will be set based on the current cost in ONE to mint a unit of the winner token. All net liquidity of the winner, plus the net liquidity of all other tokens in the competition round, will be moved to the new pool. A small amount of supply of the winner token will be automatically minted, to match the required amount for creating the new liquidity pool at the current price.</Text>
        <Text color={'accentWhite'}>5. Other tokens in the competition round (that are not the winner) can be exchanged into the winner token. The rate of exchange depends on the current supply of the token and the winner token, approximately equal to the amount you would get for burning the token then use the ONE you would get paid for to mint the winner token.</Text>
      </Box>
    </Box>
    <Box gap={'16px'}>
      <Box align={'center'}>
        <Text color={'accentWhite'} size={'20px'}>Fees and technical parameters</Text>
      </Box>
      <Box gap={'8px'}>
        <Text color={'accentWhite'}>1. There is no fee for using the platform. However, to reduce spam, fraud, and to establish a prize and market making pool, a a 50 basis point (0.5%) deduction is made from the ONE amount you pay (or would be paid) towards the prize and market making pool. Any use or operation of the funds in this pool will be announced ahed of time. Pump One do not earn income from the pool.</Text>
        <Text color={'accentWhite'}>2. Token unit price for minting and burning follows the formula of Unit Price =  2 * (Token Current Supply ^ 0.5). However, the formula may be changed from time to time by Pump One to improve user experience.</Text>
        <Text color={'accentWhite'}>3. Similarly, the number of days for each competition round and the minimum net liquidity required to conclude a competition round may be changed from time to time. However, when there is a major change, announcements will be made on the website as well as on social platforms.</Text>
      </Box>
    </Box>
    <Box gap={'16px'}>
      <Box align={'center'}>
        <Text color={'accentWhite'} size={'20px'}>Security and moderation</Text>
      </Box>
      <Box gap={'8px'}>
        <Text color={'accentWhite'}>1. Pump One operators have no access to your funds or your tokens. The smart contract only allows the operators to access the funds accumulated in prize and market making pool, as described above.</Text>
        <Text color={'accentWhite'}>2. Pump One website operators may remove any token from the website at their discretion, for example, when the token displays content that are obscene, violating privacy or copyright laws, or inciting violence and terrorism. The removed tokens will still exist on the blockchain, but it will not be accessible from Pump One platform.</Text>
      </Box>
    </Box>
  </Box>
}
