import MainNavigation from '../components/MainNavigation';
import { Outlet, useNavigation }  from 'react-router-dom';

function RootLayout () {

    // const navigation = useNavigation();
    // navigation.state === 'idle' ? 
    return <>
        <MainNavigation />
        <main>
            {/* {navigation.state === 'loading' && <p>...loading</p>} */}
            <Outlet />  
        </main>
    </>;   
}

export default RootLayout;