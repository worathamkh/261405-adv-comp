<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary">Load Blue Template</button>
                <button class="btn btn-success">Load Green Template</button>
                <button class="btn btn-danger">Load Red Template</button>
                <hr>
                <app-blue>
					<h2 slot="title">{{ colors.blue.title }}</h2>
					<h3 slot="subtitle">{{ colors.blue.subtitle }}</h3>
					<p slot="content">{{ colors.blue.content }}</p>
				</app-blue>
                <app-green>
					<h2 slot="title">{{ colors.green.title }}</h2>
					<h3 slot="subtitle">{{ colors.green.subtitle }}</h3>
					<p slot="content">{{ colors.green.content }}</p>
				</app-green>
                <app-red>
					<h2 slot="title">{{ colors.red.title }}</h2>
					<h3 slot="subtitle">{{ colors.red.subtitle }}</h3>
					<p slot="content">{{ colors.red.content }}</p>
				</app-red>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
		data: function() {
			return {
				colors: {
					blue: {
						title: "Blue",
						subtitle: "This article is about the colour. For other uses, see Blue (disambiguation).",
						content: "Blue is one of the three primary colours of pigments in painting and traditional colour theory, as well as in the RGB colour model. It lies between violet and green on the spectrum of visible light. The eye perceives blue when observing light with a wavelength between 450 and 495 nanometres. The clear sky and the deep sea appear blue because of an optical effect known as Rayleigh scattering. An optical effect called Tyndall scattering explains blue eyes. Distant objects appear more blue because of another optical effect called atmospheric perspective."
					},
					green: {
						title: "Green",
						subtitle: "This article is about the color. For other uses, see Green (disambiguation).",
						content: "Green is the color between blue and yellow on the visible spectrum. In the subtractive color system, used in painting and color printing, it is created by a combination of yellow and blue, or yellow and cyan; in the RGB color model, used on television and computer screens, it is one of the additive primary colors, along with red and blue, which are mixed in different combinations to create all other colors. Green is evoked by light with a predominant wavelength of roughly 495–570 nm. By far the largest contributor to green in nature is chlorophyll, the chemical by which plants photosynthesize and convert sunlight into chemical energy. Many creatures have adapted to their green environments by taking on a green hue themselves as camouflage. Several minerals have a green color, including the emerald, which is colored green by its chromium content."
					},
					red: {
						title: "Red",
						subtitle: "This article is about the color. For other uses, see Red (disambiguation).",
						content: "Red is the a colour at the end of visible spectrum of light, next to orange and opposite violet. It has a predominant light wavelength of roughly 620–740 nanometers. Red is one of the additive primary colors of visible light, along with green and blue, which in the Red Green Blue (RGB) color system are combined to create all the colors on a computer monitor or television screen. Red is one of the subtractive secondary colors, resulting from the combination of yellow and magenta, as in the CMYK color model. Traditionally, it was viewed as a primary subtractive colour, along with yellow and blue, in the RYB color space and traditional color wheel formerly used by painters and artists. Reds can vary in shade from very light pink to very dark maroon or burgundy; and in hue from the bright orange-red scarlet or vermilion to the bluish-red crimson. Red is the complementary color of cyan."
					}
				}
			};
		},
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
