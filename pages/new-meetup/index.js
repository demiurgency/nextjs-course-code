// out-domain/new-meetup
import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { Fragment } from 'react';
import Head from 'next/head';

function NewMeetupPage() {
  const router = useRouter();
  async function addMetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application./json',
      },
    });

    const data = await response.json();
    console.log(data);
    router.push('/');
  }

  return (
    <Fragment>
      <title>Add a new Meetup</title>
      <meta
        name='description'
        content='Add your own meetups and create amazing networking opportunities!'
      />
      <NewMeetupForm onAddMeetup={addMetupHandler} />
    </Fragment>
  );
}

export default NewMeetupPage;
