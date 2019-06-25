<template>
  <div :class="isPC ? 'user-list' : 'M-user-list'">
    <div v-for="(person, index) in usersData" :key="index">
      <UserCard :state="person"></UserCard>
    </div>
  </div>
</template>


<script>
  import UserCard from '../components/user-card'

export default {
  components: {
    UserCard,
  },
  props:{

  },
  data() {
    return {
      usersData: {
        0: {
          age: 22,
          gender: false,
          height: 170,
          id: 33,
          identity: false,
          isOnline: true,
          name: "邓镔",
          password: "1234",
          phone: "18812341234",
          username: "dengbin",
          weight: 70,
        },
        1: {
          age: 22,
          gender: false,
          height: 170,
          id: 33,
          identity: false,
          isOnline: true,
          name: "邓镔",
          password: "1234",
          phone: "18812341234",
          username: "dengbin",
          weight: 70,
        }
      }
    }
  },


  
  
}
</script>

<style>

</style>
