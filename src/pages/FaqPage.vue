<template>
  <div class="container">
    <section class="section section--promote">
      <BannerLarge>
        <h1>FAQ</h1>
        <img src="@/assets/images/store.jpeg" alt="Section FAQ" />
      </BannerLarge>
    </section>
    <section class="section--questions">
      <h1>Questions les plus fréquentes</h1>

      <div class="questions__container">
        <div
          v-for="(question, index) in datas"
          class="question"
          :key="'question-' + index"
        >
          <h2
            @click="question.show = !question.show"
            :class="{ hide: question.show }"
          >
            {{ question.question }}
          </h2>
          <div class="answer" v-if="question.show">{{ question.reponse }}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import BannerLarge from "@/components/BannerLarge";
const datas = reactive([
  {
    question: `Comment puis-je appliquer une remise à ma commande ?`,
    show: false,
    reponse: `Les codes de réduction peuvent être ajoutés dans le panier ou au moment de la confirmation de la commande.`,
  },
  {
    question: `Est-il possible de réserver les articles qui sont ajoutés à mon panier ?`,
    show: false,
    reponse: `Lorsque vous l'ajoutez à votre panier, un article est enregistré pendant 7 jours mais sa disponibilité ne peut être garantie. Si un article est très populaire, il peut être disponible au moment où vous l'ajoutez à votre panier mais épuisé au moment de la validation de la commande.`,
  },
  {
    question: `Puis-je vérifier la disponibilité d'un article en magasin ?`,
    show: false,
    reponse: `Vous pouvez vérifier en ligne si un article est disponible en magasin. Trouvez l'article sur hm.com et ouvrez la page du produit. Sur la page de description de l'article, cliquez sur le bouton « Trouver en magasin » et choisissez votre région pour afficher la liste des magasins où l'article est disponible. Notez que nos pièces se vendent rapidement et que la quantité en stock est indiquée à titre indicatif. Les prix en ligne peuvent également différer des prix en magasin.`,
  },
]);
</script>

<style lang="scss" scoped>
section {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  &.section--questions {
    padding: 4rem 1rem;
    background-color: #f3f3f3;

    h1 {
      margin-bottom: 3rem;
    }

    .questions__container {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 900px;
      overflow: hidden;

      .question {
        &:not(:last-of-type) {
          margin-bottom: 0.5rem;
        }
        h2 {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: rgb(32, 32, 32);
          width: 100%;
          background-color: #fff;
          padding: 1rem;
          cursor: pointer;

          &:after {
            content: "＋";
            font-size: 2rem;
            line-height: 1;
          }

          &.hide {
            &:after {
              content: "－";
            }
          }
        }
        .answer {
          user-select: none;
          text-align: left;
          background-color: rgb(158, 160, 158);
          color: #fff;
          width: 100%;
          padding: 2rem;
          animation: slideIn 0.2s ease-in forwards;
          @keyframes slideIn {
            from {
              transform: translateX(-50%);
            }
            to {
              transform: translateX(0);
            }
          }
        }
      }
    }
  }
}
</style>
