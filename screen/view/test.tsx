import {ListItem} from 'react-native-elements';
import {Avatar} from 'react-native-elements/dist/avatar/Avatar';
import {Tab} from 'react-native-elements/dist/tab/Tab';

export default function Test() {
  return (
    <>
      <ListItem>
        <ListItem.Content>
          <ListItem.Title
            style={{
              marginLeft: 30,
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            Basic type of investments
          </ListItem.Title>
          <ListItem.Subtitle
            style={{
              marginLeft: 30,
              fontSize: 14,
              marginTop: 5,
            }}>
            This is how you set your foot for 2020 Stock market recession.
            What’s next...
          </ListItem.Subtitle>
        </ListItem.Content>
        <Avatar source={require('../../asset/Ellipse740.png')} />
      </ListItem>
      <ListItem>
        <ListItem.Content>
          <ListItem.Title
            style={{
              marginLeft: 30,
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            Basic type of investments
          </ListItem.Title>
          <ListItem.Subtitle
            style={{
              marginLeft: 30,
              fontSize: 14,
              marginTop: 5,
            }}>
            This is how you set your foot for 2020 Stock market recession.
            What’s next...
          </ListItem.Subtitle>
        </ListItem.Content>
        <Avatar source={require('../../asset/Ellipse7402.png')} />
      </ListItem>
    </>
  );
}
