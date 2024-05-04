<template>
  <Header :title="title"></Header>
  <div class="container">
    <div class="home__search__div__input">
      <input type="text" class="home__search__input" placeholder="Qidirish">
    </div>
    <div class="home__notification__popup" v-if="notificationPopup">
      <p>Bugun 9:00 da Topor barberda uchrashuv bor esingizdan chiqarmang.</p>
      <img src="../../assets/icons/close.svg" alt="Close icon" @click="notificationPopup = false">
    </div>
    <div class="home__filter__cards">
      <div class="home__filter__card">
        <div class="custom-select-wrapper">
          <div class="custom-select" @click="toggleOptions(1)">
            <img src="../../assets/icons/clipper.svg" alt="Left Icon">
            <div class="selected-option">{{ selectedOptions[1] ? selectedOptions[1] : 'Servislar' }}</div>
            <img src="../../assets/icons/select-icon.svg" alt="Right Icon">
          </div>
          <div v-if="isOpen[1]" class="custom-options">
            <div v-for="(option, index) in options[0]" :key="index" class="custom-option" @click="selectOption(option.value, 1)">
              {{ option.label }}
            </div>
          </div>
        </div>
      </div>
      <div class="home__filter__card">
        <div class="custom-select-wrapper">
          <div class="custom-select" @click="toggleOptions(2)">
            <img src="../../assets/icons/star.png" alt="Left Icon">
            <div class="selected-option">{{ selectedOptions[2] ? selectedOptions[2] : 'Reyting' }}</div>
            <img src="../../assets/icons/select-icon.svg" alt="Right Icon">
          </div>
          <div v-if="isOpen[2]" class="custom-options">
            <div v-for="(option, index) in options[1]" :key="index" class="custom-option" @click="selectOption(option.value, 2)">
              {{ option.label }}
            </div>
          </div>
        </div>
      </div>
      <div class="home__filter__card">
        <div class="custom-select-wrapper">
          <div class="custom-select" @click="toggleOptions(3)">
            <img src="../../assets/icons/star.png" alt="Left Icon">
            <div class="selected-option">{{ selectedOptions[3] ? selectedOptions[3] : 'Filter' }}</div>
            <img src="../../assets/icons/select-icon.svg" alt="Right Icon">
          </div>
          <div v-if="isOpen[3]" class="custom-options">
            <div v-for="(option, index) in options[2]" :key="index" class="custom-option" @click="selectOption(option.value, 3)">
              {{ option.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home__cards">
      <HomeCard :cards="cards" />
    </div>

  </div>
  <NavigationBar></NavigationBar>
</template>

<script>
import "./Home.css"
import Header from "../../components/Header/Header.vue";
import {ref} from "vue";
import NavigationBar from "../../components/NavigationBar/NavigationBar.vue";
import HomeCard from "../../components/HomeCard/HomeCard.vue";

export default{
  components: {HomeCard, NavigationBar, Header},
  setup (){
    const title = ref("1on.uz")
    const notificationPopup = ref(false)
    const isOpen = ref([false, false, false]);
    const selectedOptions = ref([null, null, null]);
    const options = ref([
      [
        { label: 'Option 1A', value: 'option1A' },
        { label: 'Option 2A', value: 'option2A' },
        { label: 'Option 3A', value: 'option3A' }
      ],
      [
        { label: 'Option 1B', value: 'option1B' },
        { label: 'Option 2B', value: 'option2B' },
        { label: 'Option 3B', value: 'option3B' }
      ],
      [
        { label: 'Option 1C', value: 'option1C' },
        { label: 'Option 2C', value: 'option2C' },
        { label: 'Option 3C', value: 'option3C' }
      ]
    ]);
    const cards = ref([
      {
        id: 1,
        name: 'Vendor',
        rate: "4.6",
        address: "Toshkent, Mirobod 1, 23",
        bronTime: "9:00",
      },
      {
        id: 2,
        name: 'BlackShop',
        rate: "5.0",
        address: "Andijon, Mirobod 1, 23",
        bronTime: "9:00",
      },
      {
        id: 3,
        name: 'Vendor',
        rate: "2.7",
        address: "Namangan, Mirobod 1, 23",
        bronTime: "9:00",
      },
    ])

    const toggleOptions = (index) => {
      isOpen.value[index] = !isOpen.value[index];
    };

    const selectOption = (value, index) => {
      selectedOptions.value[index] = value;
      isOpen.value[index] = false;
    };

    return {
      title,
      notificationPopup,
      isOpen,
      selectedOptions,
      options,
      toggleOptions,
      selectOption,
      cards,
    }
  }

}
</script>
