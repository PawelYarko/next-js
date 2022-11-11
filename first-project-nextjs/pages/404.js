import Router from 'next/router';
import {MainLayout} from '../components/MainLayout';

export default function ErrorPage (){
    const backButtonHandler = () => {
        Router.push('/');
    }

    return(
        <MainLayout>
        <h1>Error 404</h1>
        <p>Please go back to safety <button onClick={backButtonHandler}>Go back</button></p>
        </MainLayout>
    )
}