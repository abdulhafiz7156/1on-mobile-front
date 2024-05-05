<template>
  <Header>{{$t('navigationBarMeets')}}</Header>
  <div>
    <div class="active__archive ">
      <TabView class="tabview">
        <TabPanel :header="$t('active')" class="pi pi-user">
          <div class="container">
            <OrderCard :buttonVisible="true" />
            <OrderCard :buttonVisible="true" />
          </div>
        </TabPanel>
        <TabPanel :header="$t('statusCompleted')" class="container">
          <div class="container">
            <OrderCard />
            <OrderCard />
          </div>
        </TabPanel>
      </TabView>
    </div>
  </div>
  <NavigationBar></NavigationBar>
</template>

<script>
import {ref} from "vue"
import Header from "../../components/Header/Header.vue";
import NavigationBar from "../../components/NavigationBar/NavigationBar.vue";
import "./Order.css"
import OrderCard from "../../components/OrderCard/OrderCard.vue";

export default {
  name: "Order",
  components: {OrderCard, Header, NavigationBar},
  setup() {

    return {
    }
  }
}
</script>

<style scoped>

</style>