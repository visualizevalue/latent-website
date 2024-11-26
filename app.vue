<template>
  <main>
    <Auction v-if="scope" :id="scope">
      <template #header-after>
        <p>
          ERC-721 on Ethereum
        </p>
        <p>
          Read more on <NuxtLink to="https://www.jack.art/work/latent">Latent</NuxtLink>
        </p>
      </template>
      <template #secondary-details>
        <aside class="prose">
          <p>
            Accompanied by 50x50" framed Silver Gelatin Print (Inverted)
          </p>
          <p>
            Produced at PICTO Laboratory, Bastille, Paris
          </p>
          <p>
            Displayed at Paris Photo 2024
          </p>
          <p>
            Buyer pays shipping
          </p>
        </aside>
      </template>
    </Auction>
    <NuxtPage v-else />
  </main>
</template>

<script setup>
const config = useRuntimeConfig()

const scope = computed(() => config.public.auctionId)
</script>

<style scoped>
main {
  display: grid;
  gap: var(--spacer);
}
</style>

<style>
@import "~/assets/theme.css";
</style>

