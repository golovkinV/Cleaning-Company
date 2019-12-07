@push('scripts')
    <script src="js/api.js"></script>
@endpush

@extends('templates.mainPageTemplate')


@section('content')
    <div class="d-flex text-white justify-content-center">
        <div class="p-2" style="width: 75%">
            <div class="bd-example">
                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                            <img class="d-block w-100"  src="/img/promo1.jpg" data-holder-rendered="true" style="height: 350px"> 
                            <!--
                            <div class="carousel-caption d-none d-md-block">
                                <h3 class="text-dark">Первый слайд</h3>
                                <p class="text-dark">Описание первого слайда.</p>
                            </div>
                            -->
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="/img/promo4.jpg" style="height: 350px">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="/img/promo2.jpg" style="height: 350px">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="/img/promo5.jpg" style="height: 350px">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="/img/promo3.jpg" style="height: 350px">
                        </div>

                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="d-flex text-black justify-content-center" style="margin-top: 10px;">
        <h2>Чистка мозгов - почистим нежно <span class="badge badge-secondary">* с мылом</span></h2>
    </div>
    
    <div class="d-flex text-black justify-content-center">

        <div class="card" style="width: 20%; margin: 10px">
            <div class="card-header">
                <div class="d-flex text-black justify-content-center font-weight-bold">
                    Уборка домов
                </div>
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-center w-100">
                    <div class="">
                        <div class="d-flex flex-wrap">
                            <img class="d-block w-100" src="/img/house.jpg" style="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-header">
                <div class="d-flex text-black justify-content-center">
                    <a href="">
                        <button class="btn" style="color: #2a69af">Заказать &#8250;</button>

                    </a>
                </div>
            </div>
        </div>

        <div class="card" style="width: 20%; margin: 10px">
            <div class="card-header">
                <div class="d-flex text-black justify-content-center font-weight-bold">
                    Уборка квартир
                </div>
            </div>
            <div class="card-body">
                <img class="d-block w-100" src="/img/kvartira.jpeg" style="">
            </div>
            <div class="card-header">
                <div class="d-flex text-black justify-content-center">
                    <a href="">
                        <button class="btn" style="color: #2a69af">Заказать &#8250;</button>

                    </a>
                </div>
            </div>
        </div>

        <div class="card" style="width: 20%; margin: 10px">
            <div class="card-header">
                <div class="d-flex text-black justify-content-center font-weight-bold">
                    Уборка комнат
                </div>
            </div>
            <div class="card-body">
                <img class="d-block w-100" src="/img/room.jpg" style="">
            </div>
            <div class="card-header">
                <div class="d-flex text-black justify-content-center">
                    <a href="">
                        <button class="btn" style="color: #2a69af">Заказать &#8250;</button>

                    </a>
                </div>
            </div>
        </div>
    </div>


    <div id="vovaLoh" style="display: flex; width: 500px; height: 500px; background-color: #f4c985; padding-top:100px; padding-left: 100px">
        <div class="spinner-border text-primary" role="status" id="loader">
            <span class="sr-only">Loading...</span>
        </div>
    </div>

@endsection