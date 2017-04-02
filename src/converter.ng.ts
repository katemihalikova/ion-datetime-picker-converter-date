import * as angular from "angular";
import DateConverter from "./converter";

angular.module("ion-datetime-picker").service("$ionDtpConverterDate", DateConverter);
