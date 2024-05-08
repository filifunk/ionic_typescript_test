import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { useState, useEffect } from "react";
import { useUserContext } from '../components/context';
//import { User } from '../components/context';



const Home: React.FC = () => {

  interface Thing {
    title: string;
    nickname: string;
  }

  const { user, setUser } = useUserContext()
  const [thing, setThing] = useState<Thing>({
    title: "Mr",
    nickname: "Morale",
  })

  




  useEffect(() => {
    console.log("in the useEffect", 'user:', user, 'thing', thing)
    //setTimeout(() => { console.log('updated user:', user) }, 10000)

  }, [user])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>User {user.name} {thing.nickname}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>{user.name}</h1>

        <IonButton onClick={() => {
          
          setThing({ title: "Mrs", nickname: "Morales" });
          setUser({ isSubscribed: true, name: "Pete" })
        }}>
          Change Name
        </IonButton>

        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
