from asyncio import events
from datetime import datetime
from pickle import NONE
from tkinter import NO 

from typing import Any, Text, Dict, List, Union, Optional
from urllib import response

from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk.events import SlotSet


from rasa_sdk.forms import FormValidationAction
#from rasa_sdk.events import SlotSet, EventType, FollowupAction, AllSlotsReset
from rasa_sdk.events import (
    SlotSet,
    EventType,
    ActionExecuted,
    SessionStarted,
    Restarted,
    FollowupAction,
    UserUtteranceReverted,
    AllSlotsReset,
)


# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"

# from typing import Any, Text, Dict, List
#
# from rasa_sdk import Action, Tracker
# from rasa_sdk.executor import CollectingDispatcher
#
#
# class ActionHelloWorld(Action):
#
#     def name(self) -> Text:
#         return "action_hello_world"
#
#     def run(self, dispatcher: CollectingDispatcher,
#             tracker: Tracker,
#             domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
#
#         dispatcher.utter_message(text="Hello World!")
#
#         return []
 


class ValidateComplainantDetails(FormValidationAction):
    def name(self)-> Text:
        return "validate_complainant_details"

    def validate_Help(
        self,
        value: Text,
        dispatcher: CollectingDispatcher,
        tracker: Tracker,
        domain: Dict[Text, Any],
    ) -> Dict[Text, Any]:
        name = tracker.slots.get("name")
        print(value)
        print("hello_name")
        # if name is not None:
        #     dispatcher.utter_message(response="utter_nice_name", name=name)
        
        return {"Help":value} 

    def validate_name(
        self,
        value: Text,
        dispatcher: CollectingDispatcher,
        tracker: Tracker,
        domain: Dict[Text, Any],
    ) -> Dict[Text, Any]:
        name = tracker.slots.get("name")
        print(value)
        print("hello_name")
        if name is not None:
            dispatcher.utter_message(response="utter_nice_name", name=name)
        
        return {"name":name} 

    def validate_father_hub_name(
        self,
        value: Text,
        dispatcher: CollectingDispatcher,
        tracker: Tracker,
        domain: Dict[Text, Any],
    ) -> Dict[Text, Any]:
        # name = tracker.slots.get("name")
        print(value)
        print("hello_name")
        # if name is not None:
        #     dispatcher.utter_message(response="utter_nice_name", name=name)
        
        return {"father_hub_name":value}

    def validate_DOB(
        self,
        value: Text,
        dispatcher: CollectingDispatcher,
        tracker: Tracker,
        domain: Dict[Text, Any],
    ) -> Dict[Text, Any]:
        # name = tracker.slots.get("name")
        print(value)
        # print("hello_name")
        # if name is not None:
        #     dispatcher.utter_message(response="utter_nice_name", name=name)
        
        return {"DOB":value} 

    def validate_Nationality(
        self,
        value: Text,
        dispatcher: CollectingDispatcher,
        tracker: Tracker,
        domain: Dict[Text, Any],
    ) -> Dict[Text, Any]:
        # name = tracker.slots.get("name")
        # print(value)
        # print("hello_name")
        # if name is not None:
        #     dispatcher.utter_message(response="utter_nice_name", name=name)
        
        return {"Nationality":value} 

    def validate_Contact_no(
        self,
        value: Text,
        dispatcher: CollectingDispatcher,
        tracker: Tracker,
        domain: Dict[Text, Any],
    ) -> Dict[Text, Any]:
        # name = tracker.slots.get("name")
        # print(value)
        # print("hello_name")
        # if name is not None:
        #     dispatcher.utter_message(response="utter_nice_name", name=name)
        
        return {"Contact_no":value} 

    def validate_Occupation(
        self,
        value: Text,
        dispatcher: CollectingDispatcher,
        tracker: Tracker,
        domain: Dict[Text, Any],
    ) -> Dict[Text, Any]:
        # name = tracker.slots.get("name")
        # print(value)
        # print("hello_name")
        # if name is not None:
        #     dispatcher.utter_message(response="utter_nice_name", name=name)
        
        return {"Occupation":value} 

    def validate_Religion(
        self,
        value: Text,
        dispatcher: CollectingDispatcher,
        tracker: Tracker,
        domain: Dict[Text, Any],
    ) -> Dict[Text, Any]:
        # name = tracker.slots.get("name")
        # print(value)
        # print("hello_name")
        # if name is not None:
        #     dispatcher.utter_message(response="utter_nice_name", name=name)
        
        return {"Religion":value} 


    def validate_Address(
        self,
        value: Text,
        dispatcher: CollectingDispatcher,
        tracker: Tracker,
        domain: Dict[Text, Any],
    ) -> Dict[Text, Any]:
        # name = tracker.slots.get("name")
        # print(value)
        # print("hello_name")
        # if name is not None:
        #     dispatcher.utter_message(response="utter_nice_name", name=name)
        
        return {"Address":value}