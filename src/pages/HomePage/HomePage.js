import { Text, WrapperText } from './HomePage.styled';
import HomePageImg from 'images/phone-screen-andnotebook.jpg';

const HomePage = () => {
  return (
    <>
      <Text>
        The <WrapperText>Phonebook</WrapperText> application will help you save
        contacts and be able to access them at any time!
      </Text>
      <img src={HomePageImg} alt="phonebook" />
    </>
  );
};

export default HomePage;
