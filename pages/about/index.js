import Router from 'next/router';
import {MainLayout} from '../../components/MainLayout/MainLayout';

export default function About(){
    const backButtonHandler = () => {
        Router.push('/');
    }

    return(
        <MainLayout title={'About page'}>
        <h1>About page</h1>
        <button onClick={backButtonHandler}>Go back</button>
        </MainLayout>
    )
}