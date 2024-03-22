import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

const Course = ({ title, description, onPressRate }) => {
  return (
    <View style={styles.courseContent}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text>{description}</Text>
      </View>
      <TouchableOpacity style={styles.rateButton} onPress={onPressRate}>
        <Text style={styles.rateButtonText}>Rate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  // State to hold the rating score for each course
  const [ratings, setRatings] = useState({
    businessManagement: 0,
    informationTechnology: 0,
    fashion: 0,
    buildAndEnvironment: 0,
    communications: 0
  });

  // Function to handle rating a course
  const rateCourse = (course) => {
    // Increase the rating score by 1, but ensure it does not exceed 6
    const newRating = Math.min(ratings[course] + 1, 6);
    // Update the ratings state with the new rating score
    setRatings(prevRatings => ({
      ...prevRatings,
      [course]: newRating
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>LIMKOKWING UNIVERSITY OF CREATIVE TECHNOLOGY PROSPECTUS</Text>
      </View>

      <ScrollView>
        <View style={styles.faculty}>
          <Image source={require("./BM.jpg")} style={styles.picture} />
          <Course 
            title="FACULTY OF BUSINESSS MANANEMENT" 
            description="Learn about interaction between a consumer and their environment." 
            onPressRate={() => rateCourse('businessManagement')} 
          />
          <Text style={styles.rating}>{ratings.businessManagement}</Text>
        </View>

        <View style={styles.faculty}>
          <Image source={require("./IT.jpg")} style={styles.picture} />
          <Course 
            title="FACULTY OF INFORMATION COMMUNICATION TECHNOLOGY" 
            description="Learn about information technology." 
            onPressRate={() => rateCourse('informationTechnology')} 
          />
          <Text style={styles.rating}>{ratings.informationTechnology}</Text>
        </View>

        <View style={styles.faculty}>
          <Image source={require("./film.jpg")} style={styles.picture} />
          <Course 
            title="FACULTY OF FASHION" 
            description="Learn designing, film production and so on." 
            onPressRate={() => rateCourse('fashion')} 
          />
          <Text style={styles.rating}>{ratings.fashion}</Text>
        </View>
        
        <View style={styles.faculty}>
          <Image source={require("./architecture.jpg")} style={styles.picture} />
          <Course 
            title="FACULTY OF BUILD AND ENVIRONMENT" 
            description="Learn about building and house planning." 
            onPressRate={() => rateCourse('buildAndEnvironment')} 
          />
          <Text style={styles.rating}>{ratings.buildAndEnvironment}</Text>
        </View>

        <View style={styles.faculty}>
          <Image source={require("./journalism.jpg")} style={styles.picture} />
          <Course 
            title="FACULTY OF COMMUNICATIONS" 
            description="Learn about media broadcasting and producing effective communication." 
            onPressRate={() => rateCourse('communications')} 
          />
          <Text style={styles.rating}>{ratings.communications}</Text>
        </View>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'white',
    padding: 10,
  },
  header: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 50,
    paddingLeft: 50,
    marginBottom: 40,
    marginTop: 20,
    borderRadius: 5,
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  faculty: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    marginBottom: 16,
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  picture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  courseContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  rateButton: {
    backgroundColor: 'blue',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  rateButtonText: {
    color: 'white',
  },
  rating: {
    fontSize: 18,
    marginLeft: 10,
  },
});
