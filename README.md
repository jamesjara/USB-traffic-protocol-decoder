# USB-traffic-protocol-decoder
Analysing USB traffic protocol decoder from a pcap Wireshark

## 1. Filter out the irrelevant data
Using "Apply as Filter" for relevant data, for example also looking for values like ```usb.data_flag == 'present'```

## 2. Display useful columns. 
The important  is the "Leftover Capture Data".
To add more columns, find the relevant field in the packet details, right click and select "Apply Column".

## 3. Export as text file.
Go to File -> Export Packet Dissections -> As Plain Text and saving it somewhere with the name dump.txt.

## 4. Run the script
node decode_usb_protocol.js

# Docs:
Protocol 
https://docs.mbed.com/docs/ble-hid/en/latest/api/md_doc_HID.html
Key codes
https://www.win.tue.nl/~aeb/linux/kbd/scancodes-14.html
