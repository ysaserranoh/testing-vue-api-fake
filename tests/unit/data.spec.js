import { shallowMount } from '@vue/test-utils'
import App from  '@/App.vue'

describe('Testing integrity of data() properties', () => {
    const wrapper = shallowMount(App)
    it ('should have name property', () => {
        expect(wrapper.vm.$data).toHaveProperty('name')
        expect(typeof wrapper.vm.name).toBe('string')
    })
    
    it ('should have image property', () => {
        expect(wrapper.vm.$data).toHaveProperty('image')
        expect(typeof wrapper.vm.image).toBe('string')
    })

    it('should have type property', () => {
        expect(wrapper.vm.$data).toHaveProperty('type')
        expect(typeof wrapper.vm.type).toBe('string')
    })

    it('should have height property', () => {
        expect(wrapper.vm.$data).toHaveProperty('height')
        expect(typeof wrapper.vm.height).toBe('number')
    })

    it('should have weight property', () => {
        expect(wrapper.vm.$data).toHaveProperty('weight')
        expect(typeof wrapper.vm.weight).toBe('number')
    })

    it('should have abilities property', () => {
        expect(wrapper.vm.$data). toHaveProperty('abilities')
        expect(Array.isArray(wrapper.vm.abilities)).toBeTruthy()
    })
})