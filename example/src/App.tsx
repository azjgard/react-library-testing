import { DittoProvider, Ditto } from 'ditto-react-2'
import source from './ditto/text.json';

const App = () => {
  return (
    <DittoProvider source={source}>
      <Page /> 
    </DittoProvider>
  )
}

const Page = () => {
  return (
    <div>
      <Ditto 
        projectId="project_609c2013654b7400c681310e"
        textId="text_609c20134107df0099db7bc6"
      />
      <Ditto 
        projectId="project_609c2013654b7400c681310e"
        frameId="frame_609c20134107df0099db7bc0"
        blockId="heading"
      >
        {(value) => Object.keys(value).map(id => <p key={id}>{value[id]}</p>)}
      </Ditto>
    </div>
  )
}

export default App;
