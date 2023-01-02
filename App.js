import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Forecast } from './components/forecast/forecast';
import { Logo } from './components/logo/logo';
import { ModalView } from './components/modal/modalView';
import store from './redux/store & selectors/store';

export default function App() {
  return <Provider store={store}>
          <ScrollView style={styles.app}>
            <Logo />
            <Forecast />
            <ModalView />
          </ScrollView>
        </Provider>
}

const styles = StyleSheet.create({
 app: {
  paddingHorizontal: 40,
  paddingVertical: 100,
  backgroundColor: '#F7FAFC'
 }
});
