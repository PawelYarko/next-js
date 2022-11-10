import Router from 'next/router';

export default function About(){
    const backButtonHandler = () => {
        Router.push('/');
    }

    return(
        <>
        <h1>About page</h1>
        <button onClick={backButtonHandler}>Go back</button>
        </>
    )
}