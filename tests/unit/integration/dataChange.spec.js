import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('Validar Cambios', () => {
    const wrapper = mount(App)

    const nameTag = wrapper.find('.pokemon-name')
    const lastNameValue = nameTag.text()
    const imgTag = wrapper.find('img')
    const lastImgValue = imgTag.attributes().src
    const typeTag = wrapper.find('#type')
    const lastTypeValue = typeTag.text()
    const weightTag = wrapper.find('#weight')
    const lastWeightValue = weightTag.text()
    const heightTag = wrapper.find('#height')
    const lastHeightValue = heightTag.text()
    const abilitiesTag = wrapper.find('ul')
    const lastAbilitiesValue = abilitiesTag.text()

    const btn = wrapper.find('button')
    btn.trigger('click')

    test('should change name', async () => {
        expect(nameTag.text()).not.toContain('name')
        await wrapper.vm.$nextTick()
        .then(() => {
            expect(nameTag.text()).not.toBe(lastNameValue)
        })
    })

    test('should change name', async () => {
        expect(imgTag.attributes().src).not.toBe('')
        await wrapper.vm.$nextTick()
        .then(() => {
            expect(imgTag.attributes().src).not.toBe(lastImgValue)
        })
    })

    it('should change type', async () => {
        expect(typeTag.attributes().src).not.toBe('')
        await wrapper.vm.$nextTick()
        .then(() => {
            expect(typeTag.attributes().src).not.toBe(lastTypeValue)
        })
    })

    it('should change weight', async () => {
        expect(weightTag.attributes().src).not.toBe(0)
        await wrapper.vm.$nextTick()
        .then(() => {
            expect(weightTag.attributes().src).not.toBe(lastWeightValue)
        })
    })

    it('should change height', async () => {
        expect(heightTag.attributes().src).not.toBe(0)
        await wrapper.vm.$nextTick()
        .then(() => {
            expect(heightTag.attributes().src).not.toBe(lastHeightValue)
        })
    })

    it('should change abilities', async () => {
        expect(abilitiesTag.attributes().src).not.toBe([])
        await wrapper.vm.$nextTick()
        .then(() => {
            expect(abilitiesTag.attributes().src).not.toBe(lastAbilitiesValue)
        })
    })
})