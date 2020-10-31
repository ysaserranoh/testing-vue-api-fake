import { mount } from  '@vue/test-utils'
import App from  '@/App.vue'

describe ('Testing the correct rendering of elements', () => {
    const wrapper = mount(App)

    it('should render 2 sections', () => {
        expect(wrapper.find('.app-pokemon-main').exists()).toBeTruthy()
        expect(wrapper.find('.app-pokemon-main').element.tagName).toBe('SECTION')
        expect(wrapper.find('.app-pokemon-stats').exists()).toBeTruthy();
        expect(wrapper.find('.app-pokemon-stats').element.tagName).toBe('SECTION')
    })

    it('should render 1 img', () => {
        expect(wrapper.find('img').exists()).toBeTruthy()
        expect(wrapper.find('img').element.tagName).toBe('IMG')
    })

    it('should render 2 p', () => {
        expect(wrapper.find('.pokemon-name').exists()).toBeTruthy()
        expect(wrapper.find('.pokemon-name').element.tagName).toBe('P')
        expect(wrapper.find('#abilities').exists()).toBeTruthy()
        expect(wrapper.find('#abilities').element.tagName).toBe('P')
    })

    it('should 1 button', () => {
        expect(wrapper.find('button').exists()).toBeTruthy()
        expect(wrapper.find('button').element.tagName).toBe('BUTTON')
    })

    it('should render 1 ul', () => {
        expect(wrapper.find('ul').exists()).toBeTruthy()
        expect(wrapper.find('ul').element.tagName).toBe('UL')
    })

    it('should render component', () => {
        expect(wrapper.find('.component').exists()).toBeTruthy();
    })
})