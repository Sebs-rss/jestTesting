// Aquí creo aqui las pruebas unitarias para el componente AboutView.vue

/* import { mount } from '@vue/test-utils'*/
import { shallowMount } from '@vue/test-utils'
import AboutView from '@/views/AboutView.vue'

/* describe('AboutView.vue', () => {
    test('Probando la existencia del componente o vista AboutView ', async () => {
        const wrapper = mount(AboutView)
        expect(wrapper.findComponent(AboutView).exists()).toBe(true)
    })
}) */

//Con shallowMount
describe('AboutView.vue', () => {
    test('Probando la existencia del componente o vista AboutView ', async () => {
        const wrapper = shallowMount(AboutView)
        expect(wrapper.findComponent(AboutView).exists()).toBe(true)
    }),
    it('matches the snapshot', () => { const wrapper = shallowMount(AboutView); expect(wrapper.html()).toMatchSnapshot(); });
})