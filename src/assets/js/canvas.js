import * as THREE from 'three';

export function canvas() {
    var scene = new THREE.Scene();

    // 카메라 설정
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
    camera.position.set(0, 0, 1000);

    // 렌더링 설정
    var renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('webgl-canvas'),
        alpha: true, // 투명 배경을 사용하도록 설정
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // 모양 설정
    const geometry = new THREE.SphereGeometry(300, 30, 30);
    const material = new THREE.MeshStandardMaterial({
        color: new THREE.Color('#ddff0d'),
        wireframe: true,
    });
    const mesh = new THREE.Mesh(geometry, material);

    // 위치를 위측 하단으로 옮김
    mesh.position.set(0, -window.innerHeight / 2, 0);

    // 스케일을 키움
    mesh.scale.set(2, 2, 2);

    scene.add(mesh);

    // 조명 설정
    const ambientlight = new THREE.AmbientLight(0xffffff, 1);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);

    scene.add(ambientlight);
    //scene.add(directionalLight);

    // 애니메이션 속도 조절을 위한 변수 추가
    let rotationSpeedX = 0.004;
    let rotationSpeedY = 0.004;

    // 애니메이션 설정
    function animate() {
        requestAnimationFrame(animate);

        // 회전 속도에 따라 회전
        mesh.rotation.x += rotationSpeedX;
        mesh.rotation.y += rotationSpeedY;

        renderer.render(scene, camera);
    }
    animate();

    // 화면 사이즈 설정
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', onWindowResize);
}
