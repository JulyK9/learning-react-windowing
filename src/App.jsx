import './App.css';
// import List from '../src/components/List';
import { faker } from '@faker-js/faker';
import { FixedSizeList } from 'react-window';

const bigList = [...Array(5000)].map(() => ({
  name: faker.person.fullName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar(),
}));
// console.log(bigList);

function App() {
  // const renderItem = (item) => (
  //   <div style={{ display: 'flex' }}>
  //     <img src={item.avatar} alt={item.name} />
  //     <p>
  //       {item.name} - {item.email}
  //     </p>
  //   </div>
  // );

  // const renderEmpty = () => (
  //   <>
  //     <p>This list is empty</p>
  //   </>
  // );

  const renderRow = ({ index, style }) => (
    <div style={{ ...style, ...{ display: 'flex' } }}>
      <img src={bigList[index].avatar} alt={bigList[index].name} width={50} />
      <p>
        {bigList[index].name} - {bigList[index].email}
      </p>
    </div>
  );

  // return (
  //   <List data={bigList} renderEmpty={renderEmpty} renderItem={renderItem} />
  // );

  return (
    <FixedSizeList
      height={window.innerHeight}
      width={window.innerWidth - 20}
      itemCount={bigList.length}
      itemSize={50}
    >
      {renderRow}
    </FixedSizeList>
  );
}

export default App;
