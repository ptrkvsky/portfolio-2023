# ADR Title: Adding a Custom Event for Preloader Completion

## Context

In my web application, I have implemented a preloader animation to improve user experience while the website is loading. The preloader animation is displayed until the loading process is complete. I need a way for other components, such as the title animation, to know when the preloader animation has finished so they can start their animations. To achieve this, I am proposing the addition of a custom event called "preloaderIsOver."

## Decision

I have decided to add a custom event called "preloaderIsOver" to signal the completion of the preloader animation. This event will be dispatched when the preloader animation is finished.

## Reasoning

1. **Modularity**: By using a custom event, I keep the preloader animation module independent of other components. Components can subscribe to this event without needing to know the internal details of the preloader implementation.

2. **Separation of Concerns**: The addition of a custom event allows me to separate the logic of the preloader animation from other components. Each component can decide how to respond to the event without tightly coupling with the preloader.

3. **Flexibility**: In the future, if I want to make changes to the preloader animation or add more components that need to respond to its completion, I can do so without affecting existing code. This promotes code maintainability and extensibility.

## Implementation Details

- I am dispatching the "preloaderIsOver" event using the `document` object when the preloader animation is complete.
- The event includes a "detail" property that can carry additional data. In my current implementation, I include a message indicating that the preloader is complete.

## Example Usage

- In the `revealTitle` function, I listen for the "preloaderIsOver" event using `document.addEventListener`. When the event is fired, I trigger the title animation.

```javascript
document.addEventListener("preloaderIsOver", () => {
  // Trigger title animation here
});
```
