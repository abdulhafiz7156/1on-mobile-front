<template>
  <div class="home__card" v-for="(card, index) in cards" :key="index" @click="redirectBarbershop()">
    <div class="home__card__logo__rate__address df">
      <img src="../../assets/images/barbershop__logo.png" alt="">
      <div class="home__card__name__rate__address">
        <h3>{{card.name}}</h3>
        <div class="home__card__rate__address df__jcc__aic">
          <div class="df__jcc__aic">
            <img src="../../assets/icons/star2.png" alt="">
            <p>{{card.rate}}</p>
          </div>
          <p>{{card.address}}</p>
        </div>
      </div>
      <img src="../../assets/icons/barbershop__menu__burger.svg" alt="">
    </div>
    <div class="home__card__image">
      <img src="../../assets/images/barbershop.png" alt="">
    </div>
    <div class="home__card__time__button df">
      <div class="home__card__time">
        <p>{{$t('homeCardBronTime')}}:</p>
        <div class="df">
          <p>{{card.bronTime}}</p>
          <p>{{card.bronTime}}</p>
        </div>
      </div>
      <div class="home__card__button">
        <button><a href="">
          {{$t('homeCardConnecting')}}
        </a></button>
      </div>
    </div>
  </div>
</template>

<script>
import "./HomeCard.css"
import {useRouter} from "vue-router";

export default {
  props: {
    cards: {
      type: Array,
      required: true
    }
  },
  setup() {
    const router = useRouter()

    const redirectBarbershop = () => {
      router.push('/barbershop')
    }

    return {
      redirectBarbershop,
      router

    }
  }
}
</script>

<style scoped>

</style>