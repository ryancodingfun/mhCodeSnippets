import { Entity, World } from 'horizon/core';
import { DynamicLightGizmo, Vec3, Color, Component, PropTypes } from 'horizon/core';

class DayNightCycle extends Component<typeof DayNightCycle> {
  static propsDefinition = {
    light: { type: PropTypes.Entity },
  };

  private light!: DynamicLightGizmo;

  start() {
    this.light = this.props.light!.as(DynamicLightGizmo)!;

    this.connectLocalBroadcastEvent(World.onUpdate, (data: { deltaTime: number }) => {
      this.updateDayNightCycle();
    });
  }

  updateDayNightCycle() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();

    // Calculate the time of day as a fraction of the day (0 = midnight, 1 = next midnight)
    const timeOfDay = (hours + minutes / 60) / 24;

    // Adjust the light intensity and color based on the time of day
    const intensity = this.calculateIntensity(timeOfDay);
    const color = this.calculateColor(timeOfDay);

    this.light.intensity.set(intensity);
    this.light.color.set(color);
  }

  calculateIntensity(timeOfDay: number): number {
    // Simulate a day/night cycle by adjusting the intensity
    // For example, intensity is highest at noon and lowest at midnight
    return Math.sin(timeOfDay * Math.PI * 2) * 5 + 5; // Example intensity curve
  }

  calculateColor(timeOfDay: number): Color {
    // Adjust the color temperature based on the time of day
    // For example, warmer colors during sunrise and sunset, cooler colors during the day
    const temperature = Math.sin((timeOfDay + 0.25) * Math.PI * 2); // Shifted sine curve to simulate sunrise/sunset
    const r = temperature > 0 ? temperature : 0; // Red component
    const b = temperature < 0 ? -temperature : 0; // Blue component

    return new Color(r, 0.5, b); // Example color calculation
  }
}

Component.register(DayNightCycle);