import {Box, Grommet, Text} from "grommet";
import {AppRoutes} from "./Routes.tsx";
import {darkTheme} from "./theme/grommet.ts";
import {antdTheme} from "./theme/antd.ts";
import {ConfigProvider, notification} from "antd";
import {BrowserRouter} from "react-router-dom";
import {ClientDataProvider} from "./providers/DataProvider.tsx";
import {useEffect} from "react";

function App() {
  // const account = useAccount()
  // const { connectors, connect, status, error } = useConnect()
  // const { disconnect } = useDisconnect()

  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    const showNotification = () => {
      api.open({
        message: <Text size={'20px'} weight={500}>Disclaimer</Text>,
        placement: 'top',
        style: {
          width: '700px',
          border: '1px solid gray',
          borderRadius: '5px'
        },
        description: <Box gap={'8px'}>
          <Text>Memeco provides engaging and fun AD campaigns for businesses and brands on the LUV NFT FUN social media platform. </Text>
          <Text>Join the FUN: <a href={'https://fun.luvnft.com'} target={'_blank'}>LUV NFT FUN</a>.</Text>
          <Text>
            Additionally, memeco.luvnft.com is currently in a pre-alpha stage. Use at your own risk until an official announcement is made by @hahz on LUV NFT FUN.
          </Text>
        </Box>
    ,
    duration: 0,
      });
    }
    showNotification()
  }, []);

  return <Box>
    <Grommet theme={darkTheme} themeMode={'dark'} full>
      <ConfigProvider theme={antdTheme}>
        {contextHolder}
        <BrowserRouter>
          <ClientDataProvider>
            <AppRoutes />
          </ClientDataProvider>
        </BrowserRouter>
      </ConfigProvider>
    </Grommet>
  </Box>

  // return (
  //   <>
  //     <div>
  //       <h2>Account</h2>
  //
  //       <div>
  //         status: {account.status}
  //         <br />
  //         addresses: {JSON.stringify(account.addresses)}
  //         <br />
  //         chainId: {account.chainId}
  //       </div>
  //
  //       {account.status === 'connected' && (
  //         <button type="button" onClick={() => disconnect()}>
  //           Disconnect
  //         </button>
  //       )}
  //     </div>
  //
  //     <div>
  //       <h2>Connect</h2>
  //       {connectors.map((connector) => (
  //         <button
  //           key={connector.uid}
  //           onClick={() => connect({ connector })}
  //           type="button"
  //         >
  //           {connector.name}
  //         </button>
  //       ))}
  //       <div>{status}</div>
  //       <div>{error?.message}</div>
  //     </div>
  //   </>
  // )
}

export default App
