import Vue from 'vue';


export default Vue.observable({
  isOnline: false,
  identity: false,// true 代表医师，false患者
  sex: '',
  age: 20,
  gender: false,// false是男
  height: 0,
  id: 0,
  name: "",
  password: "",
  phone: "",
  username: "",
  weight: 0,
});