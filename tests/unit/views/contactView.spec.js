// Ahora creo aquí las pruebas unitarias para el componente ContactView.vue

import { shallowMount } from '@vue/test-utils'
import ContactView from '@/views/ContactView.vue'

describe('ContactView.vue', () => {
    test('Probando la existencia del componente o vista ContactView ', async () => {
        const wrapper = shallowMount(ContactView)
        expect(wrapper.findComponent(ContactView).exists()).toBe(true)
    }),
    // Prueba de match con el snapshot
    it('matches the snapshot', () => { const wrapper = shallowMount(ContactView); expect(wrapper.html()).toMatchSnapshot();
});
})