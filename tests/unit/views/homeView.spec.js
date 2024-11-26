//Genera una prueba que permita crear un snapshot de la estructura HTML del componente HomeView.vue.

import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('HomeView.vue', () => {
    /* test('Probando la existencia del componente o vista HomeView ', async () => {
        const wrapper = mount(HomeView)
        expect(wrapper.findComponent(HomeView).exists()).toBe(true)
    }), */
    //Con shallowMount
    test('Probando la existencia del componente o vista AboutView ', async () => {
        const wrapper = shallowMount(HomeView)
        expect(wrapper.findComponent(HomeView).exists()).toBe(true)
    }),
    it('matches the snapshot', () => { const wrapper = shallowMount(HomeView); expect(wrapper.html()).toMatchSnapshot(); });
})


