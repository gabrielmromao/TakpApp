import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Modal from "react-native-modal";
import * as Icon from "react-native-feather";

const data = [
  {
    id: 1,
    descricao: 'Pescar no rio',
    dataExecucao: '16/04/2023',
    horaExecucao: '16:20',
    status: true,
  },
  {
    id: 2,
    descricao: 'Pescar no rio',
    dataExecucao: '16/04/2023',
    horaExecucao: '16:20',
    status: false,
  },
];

const ItemList = ({descricao, dataExecucao, horaExecucao, status}) => {
  const [statusState, setStatusState] = useState(status);
  return (
      <View style={{flexDirection: 'row', backgroundColor:'#fff', borderRadius:30, height: 70, justifyContent: 'center', marginTop: 20}}>
          <View style={{flex: 1, flexDirection: 'column', height: '100%', justifyContent: 'center', marginLeft: 20}}>
            <Text style={{color:'#000'}}>{dataExecucao}</Text>
            <Text style={{color:'#000'}}>{descricao}</Text>
          </View>
            
            <TouchableOpacity style={{ width: 70, height: 70,justifyContent: 'center', alignItems: 'center'}} onPress={()=>setStatusState(!statusState)}>
            {statusState  ?

              <Icon.Check   stroke={'green'} height={30} width={30} />
              :

              <Icon.X  stroke={'red'} height={30} width={30} />
            }
            </TouchableOpacity>
      </View>
  );
};

function DashScreen() {

  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);

  const TaskModal = () => {
    setModalVisible(!isModalVisible);
  };

  const NewTaskModal = () => {
    setModalVisible2(!isModalVisible2);
  }; 
  
  return (
    <LinearGradient
      colors={['yellow', '#fff']}
      style={{flex: 1}}>
      <View style={{justifyContent:'center', alignContent:'center', alignItems:'center'}}>
        <TouchableOpacity onPress={TaskModal} style={{ width: '98%'}}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <ItemList
                descricao={item.descricao}
                // url={item.url}
                dataExecucao={item.dataExecucao}
                horaExecucao={item.horaExecucao}
                status={item.status}
              />
            )}
            keyExtractor={item => item.id}
          />
        </TouchableOpacity>
      </View>
      <View style={{ position: 'absolute', bottom: 20, right: 20}}>
          <TouchableOpacity style={{ backgroundColor: '#fff',borderRadius: 30,width: 60,height: 60, justifyContent: 'center', alignItems: 'center'}} onPress={NewTaskModal}> 
          <Icon.Plus stroke="black" fill="#000" width={40} height={40} />
          </TouchableOpacity>
        </View>
      <Modal isVisible={isModalVisible}>
        <View style={{backgroundColor: '#fff', borderRadius: 30, alignItems:'center', justifyContent:'center', alignContent:'center', height:350 }}>
          <Text style={{color: '#000', fontWeight: 'bold', fontSize:23}}>Descrição</Text>
          <TextInput placeholderTextColor={'#000'} color={'#000'} style={{borderColor: '#000', borderStyle: 'solid', borderWidth:1, width: 300, height: 80, marginBottom:20, borderRadius: 30}} placeholder="Descrição da Tarefa"/>
          <TextInput placeholderTextColor={'#000'} color={'#000'} style={{borderColor: '#000', borderStyle: 'solid', borderWidth:1, width: 300, height: 50, marginBottom:20, borderRadius: 30}} placeholder="Data de conclusão"/>
          <TextInput  placeholderTextColor={'#000'} color={'#000'} style={{borderColor: '#000', borderStyle: 'solid', borderWidth:1 , width: 300, height: 50, marginBottom:20, borderRadius: 30}} placeholder="Horário"/>
          <TouchableOpacity  onPress={TaskModal} style={{backgroundColor: '#000', borderRadius:30, height:40, justifyContent:'center', alignItems:'center', width:200}} >
            <Text style={{color:'#fff'}}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal isVisible={isModalVisible2}>
        <View style={{backgroundColor: '#fff', borderRadius: 30, alignItems:'center', justifyContent:'center', alignContent:'center', height:400}}>
          <Text style={{color: '#000', fontWeight: 'bold', fontSize:23}}>Criar Tarefa</Text>
          <TextInput placeholderTextColor={'#000'} color={'#000'} style={{borderColor: '#000', borderStyle: 'solid', borderWidth:1, width: 300, height: 50, marginBottom:20, borderRadius: 30}} placeholder="Nome da Tarefa"/>
          <TextInput placeholderTextColor={'#000'} color={'#000'} style={{borderColor: '#000', borderStyle: 'solid', borderWidth:1, width: 300, height: 80, marginBottom:20, borderRadius: 30}} placeholder="Descrição da Tarefa"/>
          <TextInput placeholderTextColor={'#000'} color={'#000'} style={{borderColor: '#000', borderStyle: 'solid', borderWidth:1, width: 300, height: 50, marginBottom:20, borderRadius: 30}} placeholder="Data de conclusão"/>
          <TextInput  placeholderTextColor={'#000'} color={'#000'} style={{borderColor: '#000', borderStyle: 'solid', borderWidth:1 , width: 300, height: 50, marginBottom:20, borderRadius: 30}} placeholder="Horário"/>
          <View style={{width:200, borderRadius:3000}}>
          <TouchableOpacity  onPress={NewTaskModal} style={{backgroundColor: '#000', borderRadius:30, height:40, justifyContent:'center', alignItems:'center'}} >
            <Text style={{color:'#fff'}}>Salvar</Text>
          </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </LinearGradient>
  );
}

export default DashScreen;
