import Vue from 'vue';


export default Vue.observable({
  isOnline: false,
  identity: false,// true 代表医师，false患者
  gender: false,// false是男
  age: 20,
  height: 0,
  id: 0,
  name: "",
  password: "",
  phone: "",
  username: "",
  weight: 0,
});