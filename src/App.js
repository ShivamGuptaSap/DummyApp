import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Link,
  LinkDesign,
  ShellBar,
  Menu,MenuItem,
  Button
} from '@ui5/webcomponents-react';
import { useRef } from 'react';
import './App.css';

function App() {
  const btnRef = useRef();
  return (
    <>
      <ShellBar primaryTitle="UI5 Web Components for React Template" />
      <FlexBox
        style={{ width: '100%', height: '100vh' }}
        direction={FlexBoxDirection.Column}
        justifyContent={FlexBoxJustifyContent.Center}
        alignItems={FlexBoxAlignItems.Center}
      >
        <Link href="https://sap.github.io/ui5-webcomponents-react/" target="_blank" design={LinkDesign.Emphasized}>
          Getting Started with UI5 Web Component for React
        </Link>
        <Button onClick={(e) => {
                        btnRef.current.showAt(e.target);
                    }} >Menu</Button>
        <Menu
    ref={btnRef}
    onItemClick={function noRefCheck(){}}
  >
    <MenuItem
    additionalText='qwe'
      text="New File"
    />
    <MenuItem
    additionalText='qweqw'
      text="New Folder"
    />
    </Menu>
      </FlexBox>
    </>
  );
}

export default App;
