<script setup>
import { onMounted, ref } from 'vue'
import { stringifyQuery } from 'vue-router'

const diasporaData = ref([])
// const {diasporaData} =<{countr:stringifyQuery, }[]> useFetch('/data/diaspora.json')
onMounted(async () => {
  try {
    const res = await $fetch('/data/diaspora.json')
    diasporaData.value = await res.json()
  }
  catch (err) {
    console.error('Failed to load diaspora data:', err)
  }
})

const columns = [
  { key: 'country', label: 'Country', id: 'country' },
  { key: 'locations', label: 'Locations', id: 'locations' },
  { key: 'population', label: 'Estimated Population', id: 'population' },
  { key: 'description', label: 'Description', id: 'description' },
  
]
</script>

<template>
  <section>
    <figure>
      <figcaption class="text-lg font-bold mb-4">
        Circassian Diaspora Populations
      </figcaption>

      <UTable
        :columns="columns"
        :rows="diasporaData"
        accessor-key="key"
        class="w-full"
      />

      <figcaption class="mt-4 text-sm text-gray-500">
        <cite>
          Source: Various studies and references compiled from
          <a
            href="https://en.wikipedia.org/wiki/Circassian_diaspora"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-600 underline"
          >Wikipedia</a>.
        </cite>
      </figcaption>
    </figure>
  </section>
</template>
