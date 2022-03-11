<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
          <img
            src="~assets/swing.png"
            alt="swing"
            height="28"
          >
        </a>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">
          General
        </p>
        <ul class="menu-list">
          <li
            v-for="(item, key) of items"
            :key="key"
          >
            <NuxtLink
              :to="item.to"
              exact-active-class="is-active"
            >
              <b-icon :icon="item.icon" /> {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      items: [
        {
          title: 'マニュアル',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Datacheck',
          icon: 'lightbulb',
          to: { name: 'download' }
        },
        {
          title: 's3upload',
          icon: 'lightbulb',
          to: { name: 's3up' }
        },
        {
          title: 'scatter',
          icon: 'lightbulb',
          to: { name: 'scatter' }
        },
        {
          title: 'scatter2',
          icon: 'lightbulb',
          to: { name: 'scatter2' }
        },
      ]
    }
  }
}
</script>
