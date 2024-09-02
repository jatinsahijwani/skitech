#define TRIG_PIN 7
#define ECHO_PIN 6

void setup() {
 // Initialize serial communication at 9600 baud rate
 Serial.begin(9600);
  
 // Define sensor pins as input and output
 pinMode(TRIG_PIN, OUTPUT);
 pinMode(ECHO_PIN, INPUT);
}

void loop() {
 // Clear the TRIG_PIN
 digitalWrite(TRIG_PIN, LOW);
 delayMicroseconds(2);
  
 // Send a 10 microsecond pulse to the TRIG_PIN
 digitalWrite(TRIG_PIN, HIGH);
 delayMicroseconds(10);
 digitalWrite(TRIG_PIN, LOW);
  
 // Read the signal from the sensor
 long duration = pulseIn(ECHO_PIN, HIGH);
  
 // Calculate the distance in centimeters and inches
 float distanceCm = duration * 0.034 / 2;
 float distanceIn = duration * 0.0133 / 2;
  int m = analogRead(A0);
 // Print the distance to the Serial Monitor
 if(distanceCm > 10) Serial.println("Empty/" + String(m));
 else Serial.println("Full/" + String(m));
  
 // Wait before next measurement
 delay(1000);
}