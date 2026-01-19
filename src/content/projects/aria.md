---
title: "Aria"
subtitle: "Voice prototype for American Airlines"
image: "./assets/img/projects/aria.avif"
order: 2
columns:
  - title: "Client"
    items:
      - "Case study"
  - title: "My Role"
    items:
      - "UX/UI Designer"
  - title: "What I Did"
    items:
      - "UX Design"
      - "UI Design"
      - "UX Research"
      - "Voice flow"
  - title: "Tools"
    items:
      - "Figma"
      - "Adobe XD"
      - "Voiceflow"
---

## Briefing

In the context of the growing demand for virtual assistants and innovation in the airline industry, American Airlines aims to enhance the passenger experience by implementing a voice-based virtual assistant prototype. This project seeks to offer an interactive tool that helps users navigate through the airline's various services. The integration of this technology is intended to optimize operational efficiency and increase customer satisfaction, providing a more personalized and accessible service.

This voice virtual assistant has been designed with the passengers' needs and preferences in mind (thanks to prior user research), ensuring an intuitive and easy-to-use interface. Through natural voice commands, users will be able to interact with the system smoothly and efficiently, thus improving their travel experience from the moment of booking to their arrival at their destination.

In this project presentation, we will focus primarily on showcasing the process of development and implementation into a functional prototype.

### Assistant Characteristics

First of all, we begin by specifying the main characteristics of the assistant:

- **Natural Language Processing**: The assistant is able to understand and respond to questions naturally asked by passengers, allowing for fluid interaction.
- **Multimodal**: The assistant will complement the voice with the use of visual or textual elements, making it easier for the passenger to receive additional information on the screen.
- **Specialist**: It is specifically designed for the context of an airline.
- **Proactive**: Not only does it answer questions, but it also anticipates needs, offering useful information according to the context.
- **Transactional**: Allows passengers to perform specific actions.
- **Multi-turn**: Capable of handling multi-turn conversations.

## MPV - Business Model

### Main Objective

Its aim is to make it easier for users to check flights and buy tickets using voice commands, improving accessibility and speed.

### Target Group

- Frequent airline users
- People who have difficulty navigating traditional websites or apps
- Occasional travelers looking for speed or hands-free (drivers, busy people, etc.)

### Features

**Compatible channels and devices:**

- Development of our own app with voice commands
- Initial integration with existing voice assistants (Alexa, Google Assistant, Siri) to leverage their ecosystem

### Establish Success Criteria (KPIs)

- Number of completed queries
- Number of purchases initiated
- Percentage of users who prefer this route to the app/website
- User satisfaction (NPS or feedback)

### Define Limitations

❌ Flight changes or cancellations

❌ Full user registration by voice

❌ Check-in or baggage handling

❌ Complex functions (refunds, complaints, etc.)

## MPV - People

We conduct desk research on our competitors, such as Iberia and Ryanair. This gives us a picture of how users shop or what their primary purchasing factor is. We also analyze how these companies display their content and what features they offer.

A questionnaire was then used to interview people who regularly purchase flights and/or who have accessibility needs. This way, we discovered our users' purchasing habits.

## Product Design

### Voice Assistant Personality

American Airlines' virtual voice assistant is designed to offer friendly and efficient interactions with passengers. With a neutral and respectful tone, it provides clear and accessible communication, ensuring a seamless user experience. Its focus is on facilitating customer interaction with the airline's services in a seamless and effortless manner, ensuring that each user feels heard and professionally served.

### Conversational Structure

This structure consists of four elements:

1. **The initial message**, with a greeting, introduction, and a question to the user to find out what they're looking for.
2. **The element** presents the user with a list of options (this is much clearer in the prototype with screens I present below).
3. **The detail**, with the corresponding title, description, and schedule.
4. **Farewell**.

What we see below is part of the result of creating our "happy path", that is, an ideal conversation between the assistant and a user. The prototype is shown in Voiceflow following the structure mentioned earlier.

In the creation of the happy path, "prompts" were also considered, which indicate to Voiceflow when it is time to listen to the user. Additionally, "intents" represent the user's intention and are triggered by "utterances" which are the way the user expresses their intent.

The "utterances" contain variables called "slots" which capture specific details. An example would be:

> **Utterance:** "I want to check flights", the slot would be `{destination}` `{origin}`.

### Multimodal Experience

The Aria voice assistant has been designed with a multimodal approach, allowing users to interact with the platform seamlessly across different channels: voice and screen. This approach improves accessibility, efficiency, and flexibility in the user experience.

Below are the example user interaction screens in case you want to test the prototype.
