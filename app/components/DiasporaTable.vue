<script setup>
import { onMounted, ref } from 'vue'

const diasporaData = ref([])

onMounted(async () => {
  try {
    const res = await fetch('/diaspora.json')
    diasporaData.value = await res.json()
  } catch (err) {
    console.error('Failed to load diaspora data:', err)
  }
})

const columns = [
  { key: 'country', label: 'Country' },
  { key: 'locations', label: 'Locations' },
  { key: 'population', label: 'Estimated Population' },
  { key: 'description', label: 'Description' }
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
