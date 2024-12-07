import { useEffect, useRef } from "react";
import api from '../../api/axiosConfig'
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import reviewForm from "../reviewForm/reviewForm";

import React from 'react'

const Reviews = () => {
    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;

  return (
    <div>Reviews</div>
  )
}

export default Reviews